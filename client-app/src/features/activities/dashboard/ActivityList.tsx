import { observer } from 'mobx-react-lite';
import { Fragment } from 'react';
import { Header } from 'semantic-ui-react';
// import { Activity } from '../../../app/models/activity';
import { useStore } from '../../../app/stores/store';
import ActivityListItem from './ActivityListItem';

// interface Props {
//     activities: Activity[];
//     selectActivity: (id: string) => void;
//     deleteActivity: (id: string) => void;
//     submitting: boolean;
// }

export default observer(function ActivityList() {
    const { activityStore } = useStore();
    const { groupedActivities } = activityStore;

    return (
        <>
            {groupedActivities.map(([group, activities]) => (
                <Fragment key={group}>
                    <Header sub color='teal'>
                        {group}
                    </Header>
                    {activities.map(activity => (
                        <ActivityListItem key={activity.id} activity={activity} />
                    ))}
                </Fragment>
            ))}
        </>

    )
})