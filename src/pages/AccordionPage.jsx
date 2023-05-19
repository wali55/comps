import Accordion from '../components/Accordion';

function AccordionPage() {
    const items = [
        {
            id: 'hek',
            label: 'Can I use React on a project?',
            content: 'You can use React any project you want. You can use React any project you want. You can use React any project you want.'
        },
        {
            id: 'hjhs',
            label: 'Can I use JavaScript on a project?',
            content: 'You can use JavaScript any project you want. You can use JavaScript any project you want. You can use JavaScript any project you want.'
        },
        {
            id: 'asfd',
            label: 'Can I use CSS on a project?',
            content: 'You can use CSS any project you want. You can use CSS any project you want.You can use CSS any project you want.'
        }
    ];

    return(
        <div>
            <Accordion items={items} />
        </div>
    );
}

export default AccordionPage;