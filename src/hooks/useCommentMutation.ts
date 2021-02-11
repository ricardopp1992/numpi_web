import { gql, useMutation } from "@apollo/client";

export const COMMENT_MUTATION = gql`
  mutation CreateComment(
    $displayName: String!,
    $email: String!,
    $comment: String!,
    $commentDate: DateTime!,
    $published_at: DateTime,
    $article: ID!
  ) {
    createComment (input: {
      data: {
        displayName: $displayName
        comment: $comment
        email: $email
        published_at: $published_at
        commentDate: $commentDate
        article: $article
      }
    }) {
      comment {
        displayName
        comment
        article {
          id
        }
      }
    }  
  }
`;

export default function useCommentMutation() {
  const [createComment] = useMutation(COMMENT_MUTATION);
  return createComment;
}