import React from 'react';

export type AppPropsType = { title: string };

const App: React.FunctionComponent<AppPropsType> = ({
  title,
}: AppPropsType) => <h1 className="title">{title}</h1>;

export default App;
