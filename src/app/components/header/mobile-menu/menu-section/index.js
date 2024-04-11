'use client'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function TabList() {
  return (
    <div className="tabing-menu">
      <div className="content-wrapper">
        <Tabs defaultValue= {null} >
          <TabsList className='flex flex-col'>
            <TabsTrigger value="rings">Rings</TabsTrigger>
            <TabsTrigger value="earrings">Earrings</TabsTrigger>
            <TabsTrigger value="necklaces">Necklaces</TabsTrigger>
            <TabsTrigger value="bracelets">Bracelets</TabsTrigger>
          </TabsList>
          <TabsContent value="rings" data-state='inactive'>Make changes to your Rings</TabsContent>
          <TabsContent value="earrings">Change your earrings</TabsContent>
          <TabsContent value="necklaces">Change your necklaces</TabsContent>
          <TabsContent value="bracelets">Change your bracelets</TabsContent>
        </Tabs>

      </div>
    </div>
  )
}