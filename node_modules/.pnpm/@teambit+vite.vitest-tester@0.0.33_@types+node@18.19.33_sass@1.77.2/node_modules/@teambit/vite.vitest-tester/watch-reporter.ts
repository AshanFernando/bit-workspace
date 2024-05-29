import { DefaultReporter } from 'vitest/reporters'

export default class WatchReporter extends DefaultReporter {
  constructor(onFinished: typeof DefaultReporter.prototype.onFinished) {
    super();
    this.onFinished = onFinished;
  }
}
