import { Button, Group, Tooltip } from "@mantine/core";
import { Welcome } from "./components/Welcome/Welcome";
import { Footer } from "./components/Footer/Footer";
import styles from "./page.module.css";
import { Header } from "./components/Header/Header";

export default function HomePage() {
  return (
    <div className={styles.pageContainer}>
      <Header />

      <div className={styles.contentWrap}>
        <Welcome />
        {/* <Text>Welcome to the Forest Adventures!</Text>
        <Text>
          Join Frog, Snake, and Rabbit on their exciting journeys through the forest, where they discover the true meaning of friendship, kindness, and courage. Inspired by tales passed down through generations, this heartwarming book teaches children that it&apos;s okay to be afraid, and that friends are always there to support one another.
        </Text>
        <Text>
          Explore the magical world of these three brave friends, learn about their unique stories, and watch as they come to life with fun animations like Frog jumping into a pond and Rabbit leaving playful paw prints! Stay tuned for interactive minigames that let you be part of their adventures.
        </Text>
        <Text>Ready to dive into the adventure?</Text>
        <Group justify="center" mt="xl">
          <Button component="a" href="about">Preview the Book</Button>
        </Group> */}
        {/* <ColorSchemeToggle /> */}
      </div>
      <Footer />
    </div>
  );
}
