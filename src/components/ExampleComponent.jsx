// ExampleComponent.jsx
import { motion } from "framer-motion";

export default function ExampleComponent() {
  return (
    <motion.div
  initial={{ opacity: 0, y: 30, scale: 0.95 }}
  animate={{ opacity: 1, y: 0, scale: 1 }}
  transition={{
    type: "spring",
    stiffness: 300,
    damping: 20,
    duration: 0.5, 
  }}
  className="bg-white p-6 rounded shadow-lg"
>
  <h2 className="text-xl font-bold mb-2">Popped in from the bottom!</h2>
  <p>Now with a nice bounce 🪩</p>
</motion.div>

  );
}
