import { useDebugValue, useState } from 'react';

const useVoteTracker = () => {
  const [voteUp, setVoteUp] = useState(0);
  const [voteDown, setVoteDown] = useState(0);

  useDebugValue(`voteup: ${voteUp}`);
  useDebugValue(`votedown: ${voteDown}`);

  return {
    voteUp,
    voteDown,
    setVoteUp,
    setVoteDown,
  };
};

const VoteMaker = () => {
  const { voteDown, voteUp, setVoteDown, setVoteUp } =
    useVoteTracker();

  return (
    <div>
      Vote Up:{' '}
      <button onClick={() => setVoteUp(voteUp + 1)}>{voteUp}</button>
      Vote Down:{' '}
      <button onClick={() => setVoteDown(voteDown + 1)}>
        {voteDown}
      </button>
    </div>
  );
};

export default VoteMaker;
