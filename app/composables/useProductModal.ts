import { ref } from "vue";

const selectedProduct = ref<any | null>(null);

export function useProductModal() {
  function openProduct(product: any) {
    selectedProduct.value = product;
  }

  function closeProduct() {
    selectedProduct.value = null;
  }

  return { selectedProduct, openProduct, closeProduct };
}
