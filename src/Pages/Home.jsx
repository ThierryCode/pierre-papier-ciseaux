import React from 'react'
import {Game} from "../components/game";
import { Result } from '../components/Result';
export const Home = () => {
  return (
    <div className="body">
        <Game />
        <Result />
    </div>
  )
}
