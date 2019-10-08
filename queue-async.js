class QueueAsync {
  constructor() {
    this.items = [];
    this.isProcessing = false;
  }

  queueDelay(ms) {
    return getIsProcessing => new Promise(res => setTimeout(res, ms));
  }

  getQueueById(i) {
    return this.items[i] || this.queueDelay(0);
  }

  getIsProcessing() {
    return this.isProcessing;
  }

  enqueue(fn) {
    this.items = [
      ...this.items,
      fn
    ];
  }

  dequeue() {
    this.items = this.items.slice(1);
  }

  maybeStart() {
    if (!this.isProcessing) {
      this.isProcessing = true;
      this.process(0);
    }
  }

  process(i) {
    if (i < this.items.length && this.isProcessing) {
      const fn = this.getQueueById(i);
      fn(this.getIsProcessing.bind(this))
        .then(() => this.process(i + 1))
        .finally(() => {
          this.items[i] = null;
        });
    }
  }

  stop() {
    this.isProcessing = false;
  }

  destroy() {
    this.items = [];
    this.isProcessing = false;
  }
}

var delayLog = (ms, note = ms) => (getIsProcessing) => new Promise(res => setTimeout(() => {
  console.log('delayLog: ', getIsProcessing(), note);
  res(ms);
}, ms))

var q = new QueueAsync();
q.enqueue(delayLog(1000, 1))
q.enqueue(delayLog(1000, 2))
q.enqueue(delayLog(1000, 3))
q.enqueue(delayLog(1000, 4))
q.enqueue(delayLog(1000, 5))