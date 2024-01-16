/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */

import React, { useState } from "react";
import ConfigurationDialog from "./configuration-dialog";
import Sample from "./Editor";

const App = () => {
  const [configuration, setConfiguration] = useState(null);
  if (!configuration) {
    return (
      <ConfigurationDialog
        onSubmit={(config) => setConfiguration(config)}
      />
    );
  }
  return <Sample configuration={configuration} />;
};

export default App;