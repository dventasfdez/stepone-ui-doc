import { ProcessDetailsState } from "../slices/processDetailsSlice";
import { InactiveState } from "./../slices/inactiveSlice";
import { TenantState } from "../slices/tenantSlice";
import { AdministratorHomeState } from "../slices/administratorHomeSlice";
import { AdministratorUsersState } from "../slices/administratorUsersSlice";
import { AdministratorStatsState } from "../slices/administratorStatsSlice";
import { AdministratorMailjetState } from "../slices/administratorMailjetSlice";
import { AdministratorSkillsState } from "../slices/administratorSkillsSlice";
import { RecruiterProfileState } from "../slices/recruiterProfileSlice";
import { CandidateWebState } from "../slices/candidateWebSlice";
import { ProcessFunnelingState } from "../slices/processFunnelingSlice";
import { LiveInterviewState } from "../slices/liveInterviewSlice";
import { AdministratorVideoLibraryState } from "../slices/administratorVideoLibrarySlice";
import { UserCalendarsState } from "../slices/calendarsSlice";
import { ServiceCreationState } from "../slices/serviceCreationSlice";
import { AdministratorExternalSystemOperationState } from "../slices/administratorExternalSystemOperation";
import { AdministratorExternalSystemOperationTenantState } from "../slices/administratorExternalSystemOperationTenantSlice";
import { NavigationState } from "../slices/navigationSlice";

export interface CombinedState {
  notifications: any;
}
