import fileFormatBase from './fileFormatBase';
import { FileFormatDefinition } from './types';

const jsonlFormat: FileFormatDefinition = {
  ...fileFormatBase,
  storageType: 'jsonl',
  extension: 'jsonl',
  name: 'JSON lines',
  readerFunc: 'jsonLinesReader',
  writerFunc: 'jsonLinesWriter',
};

export default jsonlFormat;
