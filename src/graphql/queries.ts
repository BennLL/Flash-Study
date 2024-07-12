/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getFlashcard = /* GraphQL */ `query GetFlashcard($id: ID!) {
  getFlashcard(id: $id) {
    id
    question
    answer
    setID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetFlashcardQueryVariables,
  APITypes.GetFlashcardQuery
>;
export const listFlashcards = /* GraphQL */ `query ListFlashcards(
  $filter: ModelFlashcardFilterInput
  $limit: Int
  $nextToken: String
) {
  listFlashcards(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      question
      answer
      setID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListFlashcardsQueryVariables,
  APITypes.ListFlashcardsQuery
>;
export const getFlashcardSet = /* GraphQL */ `query GetFlashcardSet($id: ID!) {
  getFlashcardSet(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetFlashcardSetQueryVariables,
  APITypes.GetFlashcardSetQuery
>;
export const listFlashcardSets = /* GraphQL */ `query ListFlashcardSets(
  $filter: ModelFlashcardSetFilterInput
  $limit: Int
  $nextToken: String
) {
  listFlashcardSets(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      description
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListFlashcardSetsQueryVariables,
  APITypes.ListFlashcardSetsQuery
>;
export const flashcardsBySetIDAndQuestion = /* GraphQL */ `query FlashcardsBySetIDAndQuestion(
  $setID: ID!
  $question: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelFlashcardFilterInput
  $limit: Int
  $nextToken: String
) {
  flashcardsBySetIDAndQuestion(
    setID: $setID
    question: $question
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      question
      answer
      setID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.FlashcardsBySetIDAndQuestionQueryVariables,
  APITypes.FlashcardsBySetIDAndQuestionQuery
>;
