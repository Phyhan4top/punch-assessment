import React from "react";
import { DisplayCard } from "../../re-use/Card/DisplayCard";

export const FifthSection = () => {
  return (
    <div className="min-h-screen flex flex-col items-center py-10">
      <h1 className="text-[56px] font-bold mb-10">Start your journey today.</h1>

      <div>
        <DisplayCard
          num={1}
          p={
            "Explore the vast Zwilt marketplace to find the candidate that meets your needs."
          }
          h={"Find your next star performer."}
        />

        <DisplayCard
          customStyle={{ margin: "-10px" }}
          num={2}
          p={
            "Explore the vast Zwilt marketplace to find the candidate that meets your needs."
          }
          h={"Find your next star performer."}
        />

        <DisplayCard
          num={3}
          p={
            "Explore the vast Zwilt marketplace to find the candidate that meets your needs."
          }
          h={"Find your next star performer."}
        />
      </div>
    </div>
  );
};
