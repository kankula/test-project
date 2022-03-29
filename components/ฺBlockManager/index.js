import Hero from "../blocks/Hero";
import AllGame from "../blocks/AllGame";
const getBlockComponent = ({ __component, ...rest }, index) => {
  let Block;

  switch (__component) {

    case 'blocks.hero':
      Block = Hero;
      break;

    case 'blocks.allgame':
      Block = AllGame;
      break
  }

  return Block ? <Block key={`index-${index}`} {...rest} /> : null;
};

const BlockManager = ({ blocks }) => {

  return <div>{blocks.map(getBlockComponent)}</div>;
};


export default BlockManager;
