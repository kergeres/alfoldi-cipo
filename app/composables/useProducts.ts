import { ref } from "vue";

export function useProducts(count = 24) {
  const imagePool = [
    "https://images.unsplash.com/photo-1563434649554-58f91d22ec2c?q=80&w=879&auto=format&fit=crop&ixlib=rb-4.1.0",
    "https://images.unsplash.com/photo-1733410027841-09dc77bd1832?q=80&w=830&auto=format&fit=crop&ixlib=rb-4.1.0",
    "https://images.unsplash.com/photo-1563433836985-8ce7df0842ca?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0",
    "https://images.unsplash.com/photo-1563434049350-09568e40b8b1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0",
    "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0",
    "https://images.unsplash.com/photo-1758542988664-49951c5b1999?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0",
    "https://images.unsplash.com/photo-1584473457417-bd0afe798ae1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0",
  ];

  function getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const products = ref(
    Array.from({ length: count }, (_, i) => {
      const randomImage =
        imagePool[getRandomInt(0, imagePool.length - 1)] || "";
      const price = getRandomInt(38990, 40990);
      const sizes = Array.from({ length: getRandomInt(3, 6) }, () =>
        getRandomInt(36, 45)
      );
      const sku = `MDL${i + 1}${getRandomInt(10, 99)}`;
      return {
        name: `Cipő ${i + 1}`,
        image: randomImage,
        price,
        sku,
        sizes,
      };
    })
  );

  return { products, imagePool };
}
