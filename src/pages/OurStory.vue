<template>
  <section style="width: 100%;">
    <VirtualList  :dataSources="posts"
                  :dataComponent="Post"
                  dataKey="url"/>
  </section>
</template>

<script setup lang="ts">
//@ts-ignore
import VirtualList from "vue3-virtual-scroll-list"
import Post from '@/components/Post.vue'
import { StoryPost } from '@/types/classes'

const posts = [
  new StoryPost("Our First Date", 
    "We met for tea and hot cocoa at Mutiny Information Cafe -- a Denver coffeeshop featuring used books, comics, and records. We got on so well that we were late for dinner reservations Chris had made for a more romantic restaurant down the street.",
    "https://wedding-photo-app54.s3.us-east-2.amazonaws.com/OurStory/FirstDate.jpeg",
    "Mutiny Information Cafe Building Exterior"),
  new StoryPost("Our Kobayashi Maru",
    "After dating for a little over a month, we experienced a bit of a 'No-Win' scenario. You see, we had scheduled a date for this evening, and then Liz learned that her family wanted to hold Noni Peg's 89th birthday party the same night. Consequently, since neither of us wanted to break the date, Liz spent much of this day and the day prior making a birthday cake, and Chris got to meet Liz's whole family at once at the birthday party.",
    "https://wedding-photo-app54.s3.us-east-2.amazonaws.com/OurStory/Kirk.jpeg",
    "Captain Kirk from Star Trek"),
  new StoryPost("Our First Trip",
    "We spent Memorial Day weekend 2019 taking a road trip through Utah. Along the +1,200 mi. journey, we visited Arches National Park, Zion National Park, and Monument Valley.",
    "https://wedding-photo-app54.s3.us-east-2.amazonaws.com/OurStory/Zion.JPG",
    "Forested Valley"),
  new StoryPost("Our Engagement",
    "Right before we headed out to dinner in celebration of Liz's birthday, Chris revealed he had one last birthday present and popped the question.",
    "https://wedding-photo-app54.s3.us-east-2.amazonaws.com/OurStory/Ring.JPG",
    "Hand wearing Engagement Ring"),
  new StoryPost("Our First Christmas Together",
    "Sometimes, it's the little things that make life enjoyable. Decorating our tree together while watching Christmas movies marked the start of our new family's Christmas traditions.",
    "https://wedding-photo-app54.s3.us-east-2.amazonaws.com/OurStory/Christmas+Tree.jpeg",
    "Christmas Tree"),
  new StoryPost("Our New Bundle of Joy",
    "Our Nova puppy was getting lonely. So, we got her a new little brother -- Revan.",
    "https://wedding-photo-app54.s3.us-east-2.amazonaws.com/OurStory/Revan.JPG",
     "Black shit-tzu mix puppy")
]
</script>