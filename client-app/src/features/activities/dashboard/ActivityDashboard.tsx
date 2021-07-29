import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { Grid } from "semantic-ui-react";
import LoadingComponent from "../../../app/layout/LoadingComponent";
// import { Activity } from "../../../app/models/activity";
import { useStore } from "../../../app/stores/store";
import ActivityFilters from "./ActivityFilters";
// import ActivityDetails from "../details/ActivityDetails";
// import ActivityForm from "../form/ActivityForm";
import ActivityList from "./ActivityList";

// interface Props {
//     activities: Activity[];
//     selectedActivity: Activity | undefined;
//     selectActivity: (id: string) => void;
//     cancelSelectActivity: () => void;
//     editMode: boolean;
//     openForm: (id: string) => void;
//     closeForm: () => void;
//     createOrEdit: (activity: Activity) => void;
//     deleteActivity: (id: string) => void;
//     submitting: boolean;
// }

export default observer(function ActivityDashboard() {
    const { activityStore } = useStore();
    const { loadActivities, activityRegistry } = activityStore;
    // const { selectedActivity, editMode } = activityStore;

    useEffect(() => {
        // agent.Activities.list().then(response => {
        //   let activities: Activity[] = [];
        //   response.forEach(activity => {
        //     activity.date = activity.date.split('T')[0];
        //     activities.push(activity);
        //   })
        //   setActivities(activities);
        //   setLoading(false);
        // })
        // axios.get<Activity[]>('http://localhost:5000/api/activities').then(response => {
        //   setActivities(response.data)
        // })
        if (activityRegistry.size <= 1) loadActivities();
    }, [activityRegistry.size, loadActivities])

    if (activityStore.loadingInitial) return <LoadingComponent content='Loading app' />

    return (
        <Grid>
            <Grid.Column width='10'>
                <ActivityList />
            </Grid.Column>
            <Grid.Column width='6'>
                <ActivityFilters />
            </Grid.Column>
        </Grid>
    )
})