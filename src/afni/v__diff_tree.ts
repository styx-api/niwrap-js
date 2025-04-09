// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const V__DIFF_TREE_METADATA: Metadata = {
    id: "c1b88ca0b49c6f0c6d5e49fb3192c34dfd29e2ba.boutiques",
    name: "@diff.tree",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface VDiffTreeParameters {
    "__STYXTYPE__": "@diff.tree";
    "new_dir": string;
    "old_dir": string;
    "diff_opts"?: string | null | undefined;
    "ignore_append"?: string | null | undefined;
    "ia"?: string | null | undefined;
    "ignore_list"?: string | null | undefined;
    "il"?: string | null | undefined;
    "ignore_missing": boolean;
    "no_diffs": boolean;
    "quiet": boolean;
    "save": boolean;
    "show": boolean;
    "show_list_comp": boolean;
    "skip_data": boolean;
    "verb"?: string | null | undefined;
    "diff_prog"?: string | null | undefined;
    "xxdiff": boolean;
    "X_option": boolean;
}


function dynCargs(
    t: string,
): Function | undefined {
    /**
     * Get build cargs function by command type.
    
     * @param t Command type
    
     * @returns Build cargs function.
     */
    const cargsFuncs = {
        "@diff.tree": v__diff_tree_cargs,
    };
    return cargsFuncs[t];
}


function dynOutputs(
    t: string,
): Function | undefined {
    /**
     * Get build outputs function by command type.
    
     * @param t Command type
    
     * @returns Build outputs function.
     */
    const outputsFuncs = {
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `v__diff_tree(...)`.
 *
 * @interface
 */
interface VDiffTreeOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function v__diff_tree_params(
    new_dir: string,
    old_dir: string,
    diff_opts: string | null = null,
    ignore_append: string | null = null,
    ia: string | null = null,
    ignore_list: string | null = null,
    il: string | null = null,
    ignore_missing: boolean = false,
    no_diffs: boolean = false,
    quiet: boolean = false,
    save: boolean = false,
    show: boolean = false,
    show_list_comp: boolean = false,
    skip_data: boolean = false,
    verb: string | null = null,
    diff_prog: string | null = null,
    xxdiff: boolean = false,
    x_option: boolean = false,
): VDiffTreeParameters {
    /**
     * Build parameters.
    
     * @param new_dir New directory to compare
     * @param old_dir Old directory to compare
     * @param diff_opts Apply OPTS as options in diff commands
     * @param ignore_append Append to ignore_list (list in quotes)
     * @param ia Short for -ignore_append
     * @param ignore_list Create new ignore_list (list in quotes)
     * @param il Short for -ignore_list
     * @param ignore_missing Only compare overlapping files, if different files, fail.
     * @param no_diffs Only compare existence of files
     * @param quiet Only list files with diffs
     * @param save Save actual file differences (txt and pdf)
     * @param show Show actual file differences
     * @param show_list_comp Show any pairwise differences in file lists (terminate after showing comparison)
     * @param skip_data Skip binary diff of select data files (.BRIK, .dcm, .BRIK.gz)
     * @param verb Set verbosity level (0,1,2) (default 1)
     * @param diff_prog Use PROG to show diffs (e.g. xxdiff, meld)
     * @param xxdiff Use xxdiff to show diffs
     * @param x_option Implies -xxdiff -ignore_missing
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "@diff.tree" as const,
        "new_dir": new_dir,
        "old_dir": old_dir,
        "ignore_missing": ignore_missing,
        "no_diffs": no_diffs,
        "quiet": quiet,
        "save": save,
        "show": show,
        "show_list_comp": show_list_comp,
        "skip_data": skip_data,
        "xxdiff": xxdiff,
        "X_option": x_option,
    };
    if (diff_opts !== null) {
        params["diff_opts"] = diff_opts;
    }
    if (ignore_append !== null) {
        params["ignore_append"] = ignore_append;
    }
    if (ia !== null) {
        params["ia"] = ia;
    }
    if (ignore_list !== null) {
        params["ignore_list"] = ignore_list;
    }
    if (il !== null) {
        params["il"] = il;
    }
    if (verb !== null) {
        params["verb"] = verb;
    }
    if (diff_prog !== null) {
        params["diff_prog"] = diff_prog;
    }
    return params;
}


function v__diff_tree_cargs(
    params: VDiffTreeParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("@diff.tree");
    cargs.push((params["new_dir"] ?? null));
    cargs.push((params["old_dir"] ?? null));
    if ((params["diff_opts"] ?? null) !== null) {
        cargs.push(
            "-diff_opts",
            (params["diff_opts"] ?? null)
        );
    }
    if ((params["ignore_append"] ?? null) !== null) {
        cargs.push(
            "-ignore_append",
            (params["ignore_append"] ?? null)
        );
    }
    if ((params["ia"] ?? null) !== null) {
        cargs.push(
            "-ia",
            (params["ia"] ?? null)
        );
    }
    if ((params["ignore_list"] ?? null) !== null) {
        cargs.push(
            "-ignore_list",
            (params["ignore_list"] ?? null)
        );
    }
    if ((params["il"] ?? null) !== null) {
        cargs.push(
            "-il",
            (params["il"] ?? null)
        );
    }
    if ((params["ignore_missing"] ?? null)) {
        cargs.push("-ignore_missing");
    }
    if ((params["no_diffs"] ?? null)) {
        cargs.push("-no_diffs");
    }
    if ((params["quiet"] ?? null)) {
        cargs.push("-quiet");
    }
    if ((params["save"] ?? null)) {
        cargs.push("-save");
    }
    if ((params["show"] ?? null)) {
        cargs.push("-show");
    }
    if ((params["show_list_comp"] ?? null)) {
        cargs.push("-show_list_comp");
    }
    if ((params["skip_data"] ?? null)) {
        cargs.push("-skip_data");
    }
    if ((params["verb"] ?? null) !== null) {
        cargs.push(
            "-verb",
            (params["verb"] ?? null)
        );
    }
    if ((params["diff_prog"] ?? null) !== null) {
        cargs.push(
            "-diff_prog",
            (params["diff_prog"] ?? null)
        );
    }
    if ((params["xxdiff"] ?? null)) {
        cargs.push("-xxdiff");
    }
    if ((params["X_option"] ?? null)) {
        cargs.push("-X");
    }
    return cargs;
}


function v__diff_tree_outputs(
    params: VDiffTreeParameters,
    execution: Execution,
): VDiffTreeOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: VDiffTreeOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function v__diff_tree_execute(
    params: VDiffTreeParameters,
    execution: Execution,
): VDiffTreeOutputs {
    /**
     * Show file differences between 2 directories.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `VDiffTreeOutputs`).
     */
    params = execution.params(params)
    const cargs = v__diff_tree_cargs(params, execution)
    const ret = v__diff_tree_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function v__diff_tree(
    new_dir: string,
    old_dir: string,
    diff_opts: string | null = null,
    ignore_append: string | null = null,
    ia: string | null = null,
    ignore_list: string | null = null,
    il: string | null = null,
    ignore_missing: boolean = false,
    no_diffs: boolean = false,
    quiet: boolean = false,
    save: boolean = false,
    show: boolean = false,
    show_list_comp: boolean = false,
    skip_data: boolean = false,
    verb: string | null = null,
    diff_prog: string | null = null,
    xxdiff: boolean = false,
    x_option: boolean = false,
    runner: Runner | null = null,
): VDiffTreeOutputs {
    /**
     * Show file differences between 2 directories.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param new_dir New directory to compare
     * @param old_dir Old directory to compare
     * @param diff_opts Apply OPTS as options in diff commands
     * @param ignore_append Append to ignore_list (list in quotes)
     * @param ia Short for -ignore_append
     * @param ignore_list Create new ignore_list (list in quotes)
     * @param il Short for -ignore_list
     * @param ignore_missing Only compare overlapping files, if different files, fail.
     * @param no_diffs Only compare existence of files
     * @param quiet Only list files with diffs
     * @param save Save actual file differences (txt and pdf)
     * @param show Show actual file differences
     * @param show_list_comp Show any pairwise differences in file lists (terminate after showing comparison)
     * @param skip_data Skip binary diff of select data files (.BRIK, .dcm, .BRIK.gz)
     * @param verb Set verbosity level (0,1,2) (default 1)
     * @param diff_prog Use PROG to show diffs (e.g. xxdiff, meld)
     * @param xxdiff Use xxdiff to show diffs
     * @param x_option Implies -xxdiff -ignore_missing
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `VDiffTreeOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(V__DIFF_TREE_METADATA);
    const params = v__diff_tree_params(new_dir, old_dir, diff_opts, ignore_append, ia, ignore_list, il, ignore_missing, no_diffs, quiet, save, show, show_list_comp, skip_data, verb, diff_prog, xxdiff, x_option)
    return v__diff_tree_execute(params, execution);
}


export {
      VDiffTreeOutputs,
      VDiffTreeParameters,
      V__DIFF_TREE_METADATA,
      v__diff_tree,
      v__diff_tree_params,
};
