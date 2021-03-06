import MessageComposer from '../MessageComposer';
import ServerMessage from '../../ServerMessage';
import Outgoing from '../Outgoing';

export default class UserEffectsListComposer extends MessageComposer {
    public constructor() {
        super();
    }
    public compose(): ServerMessage {
        this.response.init(Outgoing.UserEffectsListComposer);
        this.response.appendInt(0);

        return this.response;
    }
}
