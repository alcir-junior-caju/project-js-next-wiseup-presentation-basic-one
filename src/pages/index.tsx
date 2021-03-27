import { AnimatedBox, AnimatedBoxContent, AnimatedContainer, Container, Title } from "@/styles/pages/Home";
import SEO from "@/components/SEO";
import { useState } from "react";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import Image from "next/image";

const PAGE_TITLE = 'Wise Up';
const PAGE_SUB_TITLE = 'Presentation';

interface IContent {
  id: string;
  title: string;
  description: string;
  image: string;
  background: string;
  color: string;
}

const topics = [
  {
    id: '1',
    title: 'About me',
    description: 'This is me',
    image: '/assets/me.jpg',
    background: '#3d3B8E',
    color: '#fff'
  },
  {
    id: '2',
    title: 'My Routine',
    description: 'This is my routine | Freepik Image',
    image: '/assets/routine.jpg',
    background: '#B0E298',
    color: '#333'
  },
  {
    id: '3',
    title: 'My Schedule',
    description: 'This is my schedule | Freepik Image',
    image: '/assets/schedule.jpeg',
    background: '#E072A4',
    color: '#fff'
  },
  {
    id: '4',
    title: 'Life mission',
    description: 'This is my mission | Freepik Image',
    image: '/assets/mission.jpeg',
    background: '#6883BA',
    color: '#fff'
  }
];

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

export default function Home() {
  const [selectedId, setSelectedId] = useState(null);
  const [selectedContent, setSelectedContent] = useState<IContent>({
    id: '',
    title: '',
    description: '',
    image: '',
    background: '',
    color: ''
  });

  return (
    <Container>
      <SEO
        title={`${PAGE_TITLE} ${PAGE_SUB_TITLE}`}
        shouldExcludeTitleSuffix
        description="Test Description"
      />

      <Title
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ ease: "easeOut", duration: 0.5 }}
      >
        {PAGE_TITLE}
        <span> {PAGE_SUB_TITLE}</span>
      </Title>

      <AnimateSharedLayout type="crossfade">
        <AnimatedContainer
          initial="hidden"
          animate="visible"
          variants={container}
        >
          {topics.map(({ id, title, description, image, background, color }: IContent) => (
            <AnimatedBox
              background={background}
              color={color}
              key={id}
              layoutId={id}
              variants={item}
              onClick={() => {
                const content = {
                  id,
                  title,
                  description,
                  image,
                  background,
                  color
                }
                setSelectedId(id);
                setSelectedContent({ ...selectedContent, ...content });
              }}
            >
              <motion.h2>{title}</motion.h2>
            </AnimatedBox>
          ))}
        </AnimatedContainer>

        <AnimatePresence>
          {selectedId && (
            <AnimatedBoxContent
              layoutId={selectedId}
              background={selectedContent.background}
              color={selectedContent.color}
            >
                <header>
                  <h2>{selectedContent.title}</h2>
                  <motion.button onClick={() => setSelectedId(null)}>
                    Close
                  </motion.button>
                </header>
                <main>
                  <Image
                    src={selectedContent.image}
                    alt="Close"
                    width={350}
                    height={262}
                  />
                </main>
                <footer>{selectedContent.description}</footer>
            </AnimatedBoxContent>
          )}
        </AnimatePresence>
      </AnimateSharedLayout>
    </Container>
  )
}
