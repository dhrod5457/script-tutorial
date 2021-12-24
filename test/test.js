describe('example', () => {
    it('tip5_1', () => {
        const team = ['b', 'a', 'c', 'd'];

        function sortedTeam() {
            return [...team].sort();
        }

        console.log(team, sortedTeam(), team);
    });

    it('tip5_2', () => {
        const staff = [{
            name: '홍길동',
            position: '음악가'
        }, {
            name: '김갑수',
            position: '예술가'
        }];

        function getMusicians() {
            return staff.filter(member => member.position === '음악가');
        }

        console.log(getMusicians());
    });

    it('tip6_1', () => {
        const sections = ['aaa', 'bbb', 'cccc', 'cccbbb'];
        console.log(sections.filter(member => member.includes('bbb')));
    });

    it('tip7_1', () => {
        const list = ['a1', '2', '3', '4', '5'];

        const removeItem = idx => {
            return [...list.slice(0, idx), ...list.slice(idx + 1)];
        };

        const removed = removeItem(4);

        console.log(list, removed);
    });
});