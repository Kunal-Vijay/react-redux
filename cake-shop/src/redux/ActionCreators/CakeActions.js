const { BUY_CAKE } = require("./CakeTypes");

export const buyCake = () => {
  return {
    type: BUY_CAKE,
  };
};
