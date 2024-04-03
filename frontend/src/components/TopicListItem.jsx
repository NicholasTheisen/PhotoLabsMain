import React from "react";
import "../styles/TopicListItem.scss";

const sampleDataForTopicListItem = {
  id: "1",
  slug: "topic-1",
  label: "Nature",
};

const TopicListItem = ({ topic }) => {
  return (
    <div className="topic-list__item">
      {topic.title}
    </div>
  );
};


export default TopicListItem;