function skillsMember(member) {
  // member is a string
  // member is a member of the guild
  let memberSkills = [];
  if (member) {
    memberSkills = getSkillsFromMember(member);
  }
  return memberSkills;
}