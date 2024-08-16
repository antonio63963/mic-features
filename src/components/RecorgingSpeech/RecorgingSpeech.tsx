import React from 'react';
import cn from 'classnames';
import styles from './RecordingSpeech.module.css';

const RecorgingSpeech = () => {
  return (
    <main>
      <button className={cn(styles.micToggle)}>
        <span className='material-icons'>mic</span>
      </button>
      <audio className='playback' controls></audio>
    </main>
  );
}

export default RecorgingSpeech;
