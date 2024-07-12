/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createFlashcard = /* GraphQL */ `mutation CreateFlashcard(
  $input: CreateFlashcardInput!
  $condition: ModelFlashcardConditionInput
) {
  createFlashcard(input: $input, condition: $condition) {
    id
    question
    answer
    setID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateFlashcardMutationVariables,
  APITypes.CreateFlashcardMutation
>;
export const updateFlashcard = /* GraphQL */ `mutation UpdateFlashcard(
  $input: UpdateFlashcardInput!
  $condition: ModelFlashcardConditionInput
) {
  updateFlashcard(input: $input, condition: $condition) {
    id
    question
    answer
    setID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateFlashcardMutationVariables,
  APITypes.UpdateFlashcardMutation
>;
export const deleteFlashcard = /* GraphQL */ `mutation DeleteFlashcard(
  $input: DeleteFlashcardInput!
  $condition: ModelFlashcardConditionInput
) {
  deleteFlashcard(input: $input, condition: $condition) {
    id
    question
    answer
    setID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteFlashcardMutationVariables,
  APITypes.DeleteFlashcardMutation
>;
export const createFlashcardSet = /* GraphQL */ `mutation CreateFlashcardSet(
  $input: CreateFlashcardSetInput!
  $condition: ModelFlashcardSetConditionInput
) {
  createFlashcardSet(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateFlashcardSetMutationVariables,
  APITypes.CreateFlashcardSetMutation
>;
export const updateFlashcardSet = /* GraphQL */ `mutation UpdateFlashcardSet(
  $input: UpdateFlashcardSetInput!
  $condition: ModelFlashcardSetConditionInput
) {
  updateFlashcardSet(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateFlashcardSetMutationVariables,
  APITypes.UpdateFlashcardSetMutation
>;
export const deleteFlashcardSet = /* GraphQL */ `mutation DeleteFlashcardSet(
  $input: DeleteFlashcardSetInput!
  $condition: ModelFlashcardSetConditionInput
) {
  deleteFlashcardSet(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteFlashcardSetMutationVariables,
  APITypes.DeleteFlashcardSetMutation
>;
