import { Image, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";

type Post = {
  id: string;
  uri: any;
};

type Props = {
  posts: Post[];
  onPressPost?: (id: string) => void;
};

export function PostGrid({ posts, onPressPost }: Props) {
  const router = useRouter();
  return (
    <View className="flex-row flex-wrap gap-2">
      {posts.map((p) => (
        <TouchableOpacity
          key={p.id}
          onPress={() => onPressPost?.(p.id) ?? router.push(`/(tabs)/post/${p.id}` as never)}
          className="w-[31%] aspect-square rounded-2xl overflow-hidden"
          activeOpacity={0.8}
        >
          <Image source={p.uri} className="w-full h-full" resizeMode="cover" />
        </TouchableOpacity>
      ))}
    </View>
  );
}
