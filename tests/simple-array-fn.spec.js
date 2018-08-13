const posts = [
    { id: 1, upVotes: 2 },
    { id: 2, upVotes: 89 },
    { id: 3, upVotes: 1 }
];

describe("Simple Array functions", () => {
    it('use reduce to count all the upvotes ', () => {

        const sumVotes =
            posts.reduce((totalUpvotes, currentPost) => totalUpvotes + currentPost.upVotes, 0);
        expect(sumVotes).toBe(92);
    });

    it('use map to return an array only the upvotes, but adding one ', () => {
        const halveUpvotes = posts.map((x) => x.upVotes + 1)
        expect(halveUpvotes).toEqual([3, 90, 2]);
    });

    it('use filter to return the posts with less than 50 upvotes', () => {
        const lowVoted = posts.filter((x) => x.upVotes < 50);
        expect(lowVoted).toEqual([{ id: 1, upVotes: 2 }, { id: 3, upVotes: 1 }]);
    });

})