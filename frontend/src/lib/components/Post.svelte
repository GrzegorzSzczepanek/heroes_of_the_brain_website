<script lang="ts">
    import "../../app.css"
    export let username: string = "Grzegina";
    export let content: string = "Hello SvelteKit with Flask!";
    export let likes: number = 123;
    export let comments: number = 123;
</script>

<div class="border border-gray-300 p-4 mb-4">
    <div class="font-bold mb-2">
        <h3>{username}</h3>
    </div>
    <div class="mb-4">
        <p>{content}</p>
    </div>
    <div class="flex justify-between text-gray-500 text-sm">
        <div class="flex items-center">
            <span class="mr-1">{likes}</span> likes
        </div>
        <div class="flex items-center">
            <span class="mr-1">{comments}</span> comments
        </div>
    </div>
</div>