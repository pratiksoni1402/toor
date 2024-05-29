'use client';
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import './style.css';

export default function TabList() {
  // State to manage the active tab and whether to show the tab list or content
  const [activeTab, setActiveTab] = useState(null);
  const [showTabContent, setShowTabContent] = useState(false);

  const handleTabClick = (value) => {
    setActiveTab(value);
    setShowTabContent(true);
  };

  const handleBackClick = () => {
    setShowTabContent(false);
  };

  return (
    <div className="mobile-menu">
      <div className="content-wrapper">
        <Tabs value={activeTab} className="tabbing" onValueChange={handleTabClick} activationMode="manual">
          {activeTab}
          {!activeTab ? (
            <TabsList className="tablist">
              <TabsTrigger className="tablistvalue" value="rings">Rings</TabsTrigger>
              <TabsTrigger className="tablistvalue" value="earrings">Earrings</TabsTrigger>
              <TabsTrigger className="tablistvalue" value="bracelets">Bracelets</TabsTrigger>
            </TabsList>
          ) : (
           ''
          )}

          <TabsContent value="rings">
            <div className="tab-content h-full">
              <button onClick={() => setActiveTab(null)}>Back</button>
              <div>Make changes to your Rings</div>
            </div>
          </TabsContent>
          <TabsContent value="earrings">
            <div className="tab-content h-full">
              <button onClick={handleBackClick}>Back</button>
              <div>Change your earrings</div>
            </div>
          </TabsContent>
          <TabsContent value="bracelets">
            <div className="tab-content h-full">
              <button onClick={handleBackClick}>Back</button>
              <div>Change your bracelets</div>
            </div>
          </TabsContent>

        </Tabs>
      </div>
    </div>
  );
}
