/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateFlashcard = /* GraphQL */ `subscription OnCreateFlashcard($filter: ModelSubscriptionFlashcardFilterInput) {
  onCreateFlashcard(filter: $filter) {
    id
    question
    answer
    setID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateFlashcardSubscriptionVariables,
  APITypes.OnCreateFlashcardSubscription
>;
export const onUpdateFlashcard = /* GraphQL */ `subscription OnUpdateFlashcard($filter: ModelSubscriptionFlashcardFilterInput) {
  onUpdateFlashcard(filter: $filter) {
    id
    question
    answer
    setID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateFlashcardSubscriptionVariables,
  APITypes.OnUpdateFlashcardSubscription
>;
export const onDeleteFlashcard = /* GraphQL */ `subscription OnDeleteFlashcard($filter: ModelSubscriptionFlashcardFilterInput) {
  onDeleteFlashcard(filter: $filter) {
    id
    question
    answer
    setID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteFlashcardSubscriptionVariables,
  APITypes.OnDeleteFlashcardSubscription
>;
export const onCreateFlashcardSet = /* GraphQL */ `subscription OnCreateFlashcardSet(
  $filter: ModelSubscriptionFlashcardSetFilterInput
) {
  onCreateFlashcardSet(filter: $filter) {
    id
    title
    description
    flashcards {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateFlashcardSetSubscriptionVariables,
  APITypes.OnCreateFlashcardSetSubscription
>;
export const onUpdateFlashcardSet = /* GraphQL */ `subscription OnUpdateFlashcardSet(
  $filter: ModelSubscriptionFlashcardSetFilterInput
) {
  onUpdateFlashcardSet(filter: $filter) {
    id
    title
    description
    flashcards {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateFlashcardSetSubscriptionVariables,
  APITypes.OnUpdateFlashcardSetSubscription
>;
export const onDeleteFlashcardSet = /* GraphQL */ `subscription OnDeleteFlashcardSet(
  $filter: ModelSubscriptionFlashcardSetFilterInput
) {
  onDeleteFlashcardSet(filter: $filter) {
    id
    title
    description
    flashcards {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteFlashcardSetSubscriptionVariables,
  APITypes.OnDeleteFlashcardSetSubscription
>;
