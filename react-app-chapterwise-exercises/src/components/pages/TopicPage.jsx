import { useParams } from "react-router-dom";
//import { topicComponents } from "../topicComponents"; // the mapping file
import { topicComponents } from "./topicComponents";

export default function TopicPage() {
  const { chapterId, topicId } = useParams();
  const key = `${chapterId}_${topicId}`;
  const Component = topicComponents[key];

  if (!Component) return <p>Topic not found!</p>;

  return (
    <>
    <Component />
    </>
  );
}
