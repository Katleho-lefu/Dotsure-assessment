<template>
    <button >{{name}}</button>
    <!-- <div class="btn-1"></div> -->
</template>

<script>
    export default {
        name: 'Button',
        props: {
            name: String,
        }
    }
</script>

<style lang="scss" scoped>

// button {
//     width: 150px;
//     height: 40px;
//     color: white;
//     border: 2px solid rgb(244, 0, 85);
//     background-color: rgba(244, 0, 85, 0.282);
// }
// button:hover {
//         background-color: rgb(244, 0, 85);
//     }

button {
    width: 150px;
    height: 40px;
    color: white;
    border: 2px solid rgb(244, 0, 85);
    background-color: rgba(244, 0, 85, 0.282);
    position: relative;

    &::after {
        content: ">";
        position: absolute;
        margin-left: 5%;
        bottom: 4;
        opacity: 0;
    }

    &:hover {
        background:  rgb(244, 0, 85);
        transition: all 0.5s;
        width: 160px;
        &::after {
            opacity: 1;
            transition: all 0.5s;
        }
    }

}

</style>