<template>
    <button v-bind="$attrs">{{ value }}</button>
</template>

<script setup lang="ts">
import type { ButtonPropsType } from '@/types/components/UI/ButtonType';

defineProps<ButtonPropsType>()
</script>

<!-- <style lang="scss" scoped>

</style> -->