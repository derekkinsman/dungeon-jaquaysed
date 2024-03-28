import React from "react";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Jaquaysing the Dungeon',
  description: 'Matter of Factly.'
}

export default function Page() {
  return <>
    <h1>Jaquaysing [juh-kwey-zing]</h1>
    <p>verb</p>
    <ol>
      <li>to design non-linear dungeons for fantasy games of role-play.</li>
    </ol>
    <p>Words that May Be Confused with Jaquaysing</p>
    <p><a href='https://xanderingthedungeon.com/'>Xandering</a></p>
  </>
}