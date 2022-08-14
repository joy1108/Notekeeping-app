class NotebookController < ApplicationController
  def index
    @notebook = notebook.all
  end
  
  def display
  end
end
