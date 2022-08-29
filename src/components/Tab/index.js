import React, { useState } from 'react'
import Tabs from './Tabs'
import {labels} from './constant';

const TabComponent = () => {
    const [activeTab, setActiveTab] = useState(labels.WATCH_ANYWHERE)

    const onClickTab = (tab) => {
            setActiveTab(tab);
    }

  return (
    <div>
      <Tabs activeTabName = {activeTab} onClickTab={onClickTab}></Tabs>
    </div>
  )
}

export default TabComponent
