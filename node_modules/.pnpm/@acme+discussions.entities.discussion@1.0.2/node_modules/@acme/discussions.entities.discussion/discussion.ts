

export type PlainDiscussion = {
  /**
   * discussion title.
   */
  title: string;

  /**
   * name of the user.
   */
  username: string,
}

export class Discussion {
  constructor(
    /**
     * discussion title.
     */
    readonly title: string,

    /**
     * name of the user.
     */
    readonly username: string,
  ) {}

  /**
   * serialize a Discussion into
   * a serializable object.
   */
  toObject() {
    return {
      title: this.title,
      username: this.username
    };
  }

  /**
   * create a Discussion object from a 
   * plain object.
   */
  static from(plainDiscussion: PlainDiscussion) {
    return new Discussion(
      plainDiscussion.title,
      plainDiscussion.username
    );
  }
}
