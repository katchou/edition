export class TrainingContract {
  constructor(
    public record: string = null,
    public trainingName: string = null,
    public trainingLevel: string = null,
    public numberOfHours: number = null,
    public tutorName: string = null,
    public tutorPosition: string = null,
    public startDate: Date = null,
    public endDate: Date = null) {
  }

  get numberOfMonths(): number {
    var months;
    months = (this.endDate.getFullYear() - this.startDate.getFullYear()) * 12;
    months -= this.endDate.getMonth();
    months += this.startDate.getMonth();
    return months <= 0 ? 0 : months;
  }
}
