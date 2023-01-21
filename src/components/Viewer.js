import React, { useState, useEffect } from "react";

import axios from "axios";
import {
  ContainerWrapper,
  Body,
  Title,
  Container,
  LeftPanel,
  Story,
  RightPanel,
  Iframe,
  SubContainer,
  LeftElement,
  RightElement,
} from "./Viewer.styled";

const Viewer = () => {
  const [stories, setStories] = useState([""]);
  const [selectedStory, setSelectedStory] = useState(stories[0]);

  const limit = 10;

  useEffect(() => {
    async function getStories() {
      try {
        const topStoriesResponse = await axios.get(
          "https://hacker-news.firebaseio.com/v0/topstories.json"
        );
        // Get the first 10 item IDs
        const topStoriesIds = topStoriesResponse.data.slice(0, limit);
        // Map over the item IDs and make a request for each item's data
        const requests = topStoriesIds.map(async (itemId) => {
          const response = await axios.get(
            `https://hacker-news.firebaseio.com/v0/item/${itemId}.json`
          );
          return response.data;
        });
        // Wait for all requests to complete
        const topStories = await Promise.all(requests);
        setStories(topStories);
      } catch (error) {
        console.log(error);
      }
    }
    getStories();
  }, []);

  const handleClick = (story) => {
    if (selectedStory !== story) {
      setSelectedStory(story);
    }
  };

  return (
    <ContainerWrapper>
      <Body>
        <Title>Uizard Hackernews Reader</Title>
        <Container>
          <LeftPanel>
            {stories.map((story, index) => (
              <Story
                key={index}
                className={`story ${story === selectedStory ? "selected" : ""}`}
                onClick={() => handleClick(story)}
              >
                {story.title}
                <SubContainer>
                  <LeftElement>Posted by : {story.by}</LeftElement>
                  <RightElement>
                    Visit website {">"}
                    {">"}{" "}
                  </RightElement>
                </SubContainer>
              </Story>
            ))}
          </LeftPanel>
          <RightPanel>
            <Iframe
              title="This displays the content of the story"
              src={selectedStory && selectedStory.url}
            />
          </RightPanel>
        </Container>
      </Body>
    </ContainerWrapper>
  );
};

export default Viewer;

//useEffect hook is called three times and creates three iframes because
//the setSelectedStory function is called three times in the onClick event of the story elements.
//To avoid this, we can add a condition in the onClick event
//to only call setSelectedStory if the selected story is different than the currently selected one
