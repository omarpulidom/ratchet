import { Image, Text, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";
import { useColors } from "@/hooks/useColors";
import { UserAvatar } from "./UserAvatar";
import { Badge } from "./Badge";
import { CheckinActions } from "./CheckinActions";
import { CheckinCaption } from "./CheckinCaption";

type Post = {
  id: string;
  userId: string;
  username: string;
  avatarUri?: string | null;
  timestamp: string;
  groupName?: string;
  media: any;
  likes: number;
  liked: boolean;
  location?: string;
  caption: string;
};

type Props = {
  post: Post;
  onLike?: () => void;
  onUsernamePress?: () => void;
  onGroupPress?: () => void;
};

export function CheckinCard({ post, onLike, onUsernamePress, onGroupPress }: Props) {
  const router = useRouter();
  const colors = useColors();
  return (
    <TouchableOpacity
      activeOpacity={0.95}
      onPress={() => router.push(`/(tabs)/post/${post.id}` as never)}
      className="mx-2 p-2 rounded-3xl"
      style={{ backgroundColor: colors.secondary[300] }}
    >
      <View
        className="p-3 rounded-t-2xl flex-row items-center justify-between"
        style={{ backgroundColor: colors.secondary.DEFAULT }}
      >
        <TouchableOpacity
          onPress={onUsernamePress}
          className="flex-row items-center gap-2"
          activeOpacity={0.7}
        >
          <UserAvatar username={post.username} uri={post.avatarUri} size="md" />
          <View>
            <Text
              className="font-poppins-regular text-[14px] tracking-tighter"
              style={{ color: colors.secondary[700] }}
            >
              {post.username}
            </Text>
            <Text
              className="font-poppins-light text-[12px] tracking-tighter"
              style={{ color: colors.secondary[500] }}
            >
              {post.timestamp}
            </Text>
          </View>
        </TouchableOpacity>
        {post.groupName ? (
          <TouchableOpacity onPress={onGroupPress} activeOpacity={0.7}>
            <Badge label={post.groupName} />
          </TouchableOpacity>
        ) : null}
      </View>

      <View className="overflow-hidden rounded-b-2xl aspect-[4/5]">
        <Image source={post.media} className="w-full h-full" resizeMode="cover" />
      </View>

      <CheckinActions
        likes={post.likes}
        liked={post.liked}
        location={post.location}
        onLike={onLike}
      />

      <View className="px-2 my-4">
        <CheckinCaption username={post.username} caption={post.caption} />
      </View>
    </TouchableOpacity>
  );
}
