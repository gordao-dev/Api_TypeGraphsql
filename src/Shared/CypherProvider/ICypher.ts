interface ICypher {
  hashify(data: string): Promise<string>;
  compare(data: string, hash: string): Promise<boolean>;
}

export default ICypher;
