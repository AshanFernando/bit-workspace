import { Discussion } from "./discussion.js";

export function mockDiscussions() {
  return [
    Discussion.from({
      title: 'Hello everyone!',
      username: 'samdoe'
    }),
    Discussion.from({
      title: 'Platform using Bit!',
      username: 'john'
    }),
  ];
}
