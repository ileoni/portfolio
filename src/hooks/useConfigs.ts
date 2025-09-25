import configs from "../configs";

/**
 *  @returns 
 **/
export const useConfigs = (args?: string) => {
  const keys = args?.split('.');

  const recursive = (data: any, current?: any) => {
    if(data === undefined) return configs;
    
    const [first, ...rest] = data;
    if(data.length === 0) return current;
    return recursive(rest, current[first]);
  }

  return recursive(keys, configs);
}