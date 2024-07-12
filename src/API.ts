/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateFlashcardInput = {
  id?: string | null,
  question: string,
  answer: string,
  setID: string,
};

export type ModelFlashcardConditionInput = {
  question?: ModelStringInput | null,
  answer?: ModelStringInput | null,
  setID?: ModelIDInput | null,
  and?: Array< ModelFlashcardConditionInput | null > | null,
  or?: Array< ModelFlashcardConditionInput | null > | null,
  not?: ModelFlashcardConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Flashcard = {
  __typename: "Flashcard",
  id: string,
  question: string,
  answer: string,
  setID: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateFlashcardInput = {
  id: string,
  question?: string | null,
  answer?: string | null,
  setID?: string | null,
};

export type DeleteFlashcardInput = {
  id: string,
};

export type CreateFlashcardSetInput = {
  id?: string | null,
  title: string,
  description?: string | null,
};

export type ModelFlashcardSetConditionInput = {
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelFlashcardSetConditionInput | null > | null,
  or?: Array< ModelFlashcardSetConditionInput | null > | null,
  not?: ModelFlashcardSetConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type FlashcardSet = {
  __typename: "FlashcardSet",
  id: string,
  title: string,
  description?: string | null,
  flashcards?: ModelFlashcardConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelFlashcardConnection = {
  __typename: "ModelFlashcardConnection",
  items:  Array<Flashcard | null >,
  nextToken?: string | null,
};

export type UpdateFlashcardSetInput = {
  id: string,
  title?: string | null,
  description?: string | null,
};

export type DeleteFlashcardSetInput = {
  id: string,
};

export type ModelFlashcardFilterInput = {
  id?: ModelIDInput | null,
  question?: ModelStringInput | null,
  answer?: ModelStringInput | null,
  setID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelFlashcardFilterInput | null > | null,
  or?: Array< ModelFlashcardFilterInput | null > | null,
  not?: ModelFlashcardFilterInput | null,
};

export type ModelFlashcardSetFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelFlashcardSetFilterInput | null > | null,
  or?: Array< ModelFlashcardSetFilterInput | null > | null,
  not?: ModelFlashcardSetFilterInput | null,
};

export type ModelFlashcardSetConnection = {
  __typename: "ModelFlashcardSetConnection",
  items:  Array<FlashcardSet | null >,
  nextToken?: string | null,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelSubscriptionFlashcardFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  question?: ModelSubscriptionStringInput | null,
  answer?: ModelSubscriptionStringInput | null,
  setID?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionFlashcardFilterInput | null > | null,
  or?: Array< ModelSubscriptionFlashcardFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionFlashcardSetFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionFlashcardSetFilterInput | null > | null,
  or?: Array< ModelSubscriptionFlashcardSetFilterInput | null > | null,
};

export type CreateFlashcardMutationVariables = {
  input: CreateFlashcardInput,
  condition?: ModelFlashcardConditionInput | null,
};

export type CreateFlashcardMutation = {
  createFlashcard?:  {
    __typename: "Flashcard",
    id: string,
    question: string,
    answer: string,
    setID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateFlashcardMutationVariables = {
  input: UpdateFlashcardInput,
  condition?: ModelFlashcardConditionInput | null,
};

export type UpdateFlashcardMutation = {
  updateFlashcard?:  {
    __typename: "Flashcard",
    id: string,
    question: string,
    answer: string,
    setID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteFlashcardMutationVariables = {
  input: DeleteFlashcardInput,
  condition?: ModelFlashcardConditionInput | null,
};

export type DeleteFlashcardMutation = {
  deleteFlashcard?:  {
    __typename: "Flashcard",
    id: string,
    question: string,
    answer: string,
    setID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateFlashcardSetMutationVariables = {
  input: CreateFlashcardSetInput,
  condition?: ModelFlashcardSetConditionInput | null,
};

export type CreateFlashcardSetMutation = {
  createFlashcardSet?:  {
    __typename: "FlashcardSet",
    id: string,
    title: string,
    description?: string | null,
    flashcards?:  {
      __typename: "ModelFlashcardConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateFlashcardSetMutationVariables = {
  input: UpdateFlashcardSetInput,
  condition?: ModelFlashcardSetConditionInput | null,
};

export type UpdateFlashcardSetMutation = {
  updateFlashcardSet?:  {
    __typename: "FlashcardSet",
    id: string,
    title: string,
    description?: string | null,
    flashcards?:  {
      __typename: "ModelFlashcardConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteFlashcardSetMutationVariables = {
  input: DeleteFlashcardSetInput,
  condition?: ModelFlashcardSetConditionInput | null,
};

export type DeleteFlashcardSetMutation = {
  deleteFlashcardSet?:  {
    __typename: "FlashcardSet",
    id: string,
    title: string,
    description?: string | null,
    flashcards?:  {
      __typename: "ModelFlashcardConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetFlashcardQueryVariables = {
  id: string,
};

export type GetFlashcardQuery = {
  getFlashcard?:  {
    __typename: "Flashcard",
    id: string,
    question: string,
    answer: string,
    setID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListFlashcardsQueryVariables = {
  filter?: ModelFlashcardFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFlashcardsQuery = {
  listFlashcards?:  {
    __typename: "ModelFlashcardConnection",
    items:  Array< {
      __typename: "Flashcard",
      id: string,
      question: string,
      answer: string,
      setID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetFlashcardSetQueryVariables = {
  id: string,
};

export type GetFlashcardSetQuery = {
  getFlashcardSet?:  {
    __typename: "FlashcardSet",
    id: string,
    title: string,
    description?: string | null,
    flashcards?:  {
      __typename: "ModelFlashcardConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListFlashcardSetsQueryVariables = {
  filter?: ModelFlashcardSetFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFlashcardSetsQuery = {
  listFlashcardSets?:  {
    __typename: "ModelFlashcardSetConnection",
    items:  Array< {
      __typename: "FlashcardSet",
      id: string,
      title: string,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type FlashcardsBySetIDAndQuestionQueryVariables = {
  setID: string,
  question?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelFlashcardFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type FlashcardsBySetIDAndQuestionQuery = {
  flashcardsBySetIDAndQuestion?:  {
    __typename: "ModelFlashcardConnection",
    items:  Array< {
      __typename: "Flashcard",
      id: string,
      question: string,
      answer: string,
      setID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateFlashcardSubscriptionVariables = {
  filter?: ModelSubscriptionFlashcardFilterInput | null,
};

export type OnCreateFlashcardSubscription = {
  onCreateFlashcard?:  {
    __typename: "Flashcard",
    id: string,
    question: string,
    answer: string,
    setID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateFlashcardSubscriptionVariables = {
  filter?: ModelSubscriptionFlashcardFilterInput | null,
};

export type OnUpdateFlashcardSubscription = {
  onUpdateFlashcard?:  {
    __typename: "Flashcard",
    id: string,
    question: string,
    answer: string,
    setID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteFlashcardSubscriptionVariables = {
  filter?: ModelSubscriptionFlashcardFilterInput | null,
};

export type OnDeleteFlashcardSubscription = {
  onDeleteFlashcard?:  {
    __typename: "Flashcard",
    id: string,
    question: string,
    answer: string,
    setID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateFlashcardSetSubscriptionVariables = {
  filter?: ModelSubscriptionFlashcardSetFilterInput | null,
};

export type OnCreateFlashcardSetSubscription = {
  onCreateFlashcardSet?:  {
    __typename: "FlashcardSet",
    id: string,
    title: string,
    description?: string | null,
    flashcards?:  {
      __typename: "ModelFlashcardConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateFlashcardSetSubscriptionVariables = {
  filter?: ModelSubscriptionFlashcardSetFilterInput | null,
};

export type OnUpdateFlashcardSetSubscription = {
  onUpdateFlashcardSet?:  {
    __typename: "FlashcardSet",
    id: string,
    title: string,
    description?: string | null,
    flashcards?:  {
      __typename: "ModelFlashcardConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteFlashcardSetSubscriptionVariables = {
  filter?: ModelSubscriptionFlashcardSetFilterInput | null,
};

export type OnDeleteFlashcardSetSubscription = {
  onDeleteFlashcardSet?:  {
    __typename: "FlashcardSet",
    id: string,
    title: string,
    description?: string | null,
    flashcards?:  {
      __typename: "ModelFlashcardConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
