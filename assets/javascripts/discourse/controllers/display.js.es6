export default Ember.Controller.extend({
  init() {
    this._super();
    this.set('notes', []);
    this.fetchNotes();
  },

  fetchNotes() {
    this.store.findAll('note')
      .then(result => {
        for (const note of result.content) {
          this.notes.pushObject(note);
        }
      })
      .catch(console.error);
  },

  actions: {
    deleteNote(note) {
      this.store.destroyRecord('note', note)
        .then(() => {
          this.notes.removeObject(note);
        })
        .catch(console.error);
    },

    refreshCurrentRoute(){
      this.refresh();
    },

    UpdateNote(note, mynote) {

      const myid = note.id
      const noteRecord = this.store.createRecord('note', {
        id: myid,
        content: mynote
      });
      noteRecord.save();
    
      // this.store.find('note', note).then(function(record) {
      //   console.log(record)
      //   record.set('content', [note][mynote]);
      //   record.save();
      // })
      //   .catch(console.error);
    }
  }
});
