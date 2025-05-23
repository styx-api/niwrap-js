// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const AUTO_WARP_PY_METADATA: Metadata = {
    id: "0544bfd6f7c98eb7f7b9e3942033737cca834e31.boutiques",
    name: "auto_warp.py",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface AutoWarpPyParameters {
    "__STYXTYPE__": "auto_warp.py";
    "base": InputPathType;
    "input": InputPathType;
    "skull_strip_input": boolean;
    "qblur"?: string | null | undefined;
    "qworkhard"?: string | null | undefined;
    "qw_opts"?: string | null | undefined;
    "keep_rm_files": boolean;
    "prep_only": boolean;
    "help": boolean;
    "hview": boolean;
    "limited_help": boolean;
    "option_help": boolean;
    "version": boolean;
    "ver": boolean;
    "verb": boolean;
    "save_script": boolean;
    "skip_affine": boolean;
    "skull_strip_base": boolean;
    "ex_mode"?: string | null | undefined;
    "overwrite": boolean;
    "suffix"?: string | null | undefined;
    "child_anat"?: string | null | undefined;
    "warp_dxyz"?: number | null | undefined;
    "affine_dxyz"?: number | null | undefined;
    "affine_input_xmat"?: string | null | undefined;
    "smooth_anat": boolean;
    "smooth_base": boolean;
    "unifize_input": boolean;
    "output_dir"?: string | null | undefined;
    "followers"?: string | null | undefined;
    "affine_followers_xmat"?: string | null | undefined;
    "skullstrip_opts"?: string | null | undefined;
    "at_opts"?: string | null | undefined;
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
        "auto_warp.py": auto_warp_py_cargs,
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
 * Output object returned when calling `auto_warp_py(...)`.
 *
 * @interface
 */
interface AutoWarpPyOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function auto_warp_py_params(
    base: InputPathType,
    input: InputPathType,
    skull_strip_input: boolean = false,
    qblur: string | null = null,
    qworkhard: string | null = null,
    qw_opts: string | null = null,
    keep_rm_files: boolean = false,
    prep_only: boolean = false,
    help: boolean = false,
    hview: boolean = false,
    limited_help: boolean = false,
    option_help: boolean = false,
    version: boolean = false,
    ver: boolean = false,
    verb: boolean = false,
    save_script: boolean = false,
    skip_affine: boolean = false,
    skull_strip_base: boolean = false,
    ex_mode: string | null = null,
    overwrite: boolean = false,
    suffix: string | null = null,
    child_anat: string | null = null,
    warp_dxyz: number | null = null,
    affine_dxyz: number | null = null,
    affine_input_xmat: string | null = null,
    smooth_anat: boolean = false,
    smooth_base: boolean = false,
    unifize_input: boolean = false,
    output_dir: string | null = null,
    followers: string | null = null,
    affine_followers_xmat: string | null = null,
    skullstrip_opts: string | null = null,
    at_opts: string | null = null,
): AutoWarpPyParameters {
    /**
     * Build parameters.
    
     * @param base Name of reference or template volume
     * @param input Name of dataset to be registered
     * @param skull_strip_input Do not skullstrip input dataset
     * @param qblur Specify 3dQwarp blurs for base and source volumes
     * @param qworkhard Set the two values for 3dQwarp's -workhard option
     * @param qw_opts Pass all of OPTS as extra options directly to 3dQwarp
     * @param keep_rm_files Don't delete any of the temporary files created
     * @param prep_only Do preprocessing steps only without alignment
     * @param help Display help message
     * @param hview Display help message in a text editor
     * @param limited_help Display limited help message
     * @param option_help Display help for all available options
     * @param version Show version number and exit
     * @param ver Show version number and exit
     * @param verb Be verbose in messages and options
     * @param save_script Save executed script in given file
     * @param skip_affine Skip the affine registration process
     * @param skull_strip_base Do not skullstrip base/template dataset
     * @param ex_mode Command execution mode: quiet, echo, dry_run, script
     * @param overwrite Overwrite existing files
     * @param suffix Suffix to add to output files
     * @param child_anat Names of child anatomical datasets
     * @param warp_dxyz Resolution used for computing warp (cubic only)
     * @param affine_dxyz Resolution used for computing initial transform (cubic only)
     * @param affine_input_xmat Affine transform to put input in standard space. Special values are: 'AUTO' to use @auto_tlrc, 'ID' to do nothing, 'FILE.1D' for a pre-computed matrix FILE.1D
     * @param smooth_anat Smooth anatomy before registration
     * @param smooth_base Smooth template before registration
     * @param unifize_input Unifize the input or not
     * @param output_dir Set directory for output datasets
     * @param followers Specify follower datasets
     * @param affine_followers_xmat Specify follower datasets' affine transforms
     * @param skullstrip_opts 3dSkullstrip miscellaneous options
     * @param at_opts @auto_tlrc miscellaneous options
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "auto_warp.py" as const,
        "base": base,
        "input": input,
        "skull_strip_input": skull_strip_input,
        "keep_rm_files": keep_rm_files,
        "prep_only": prep_only,
        "help": help,
        "hview": hview,
        "limited_help": limited_help,
        "option_help": option_help,
        "version": version,
        "ver": ver,
        "verb": verb,
        "save_script": save_script,
        "skip_affine": skip_affine,
        "skull_strip_base": skull_strip_base,
        "overwrite": overwrite,
        "smooth_anat": smooth_anat,
        "smooth_base": smooth_base,
        "unifize_input": unifize_input,
    };
    if (qblur !== null) {
        params["qblur"] = qblur;
    }
    if (qworkhard !== null) {
        params["qworkhard"] = qworkhard;
    }
    if (qw_opts !== null) {
        params["qw_opts"] = qw_opts;
    }
    if (ex_mode !== null) {
        params["ex_mode"] = ex_mode;
    }
    if (suffix !== null) {
        params["suffix"] = suffix;
    }
    if (child_anat !== null) {
        params["child_anat"] = child_anat;
    }
    if (warp_dxyz !== null) {
        params["warp_dxyz"] = warp_dxyz;
    }
    if (affine_dxyz !== null) {
        params["affine_dxyz"] = affine_dxyz;
    }
    if (affine_input_xmat !== null) {
        params["affine_input_xmat"] = affine_input_xmat;
    }
    if (output_dir !== null) {
        params["output_dir"] = output_dir;
    }
    if (followers !== null) {
        params["followers"] = followers;
    }
    if (affine_followers_xmat !== null) {
        params["affine_followers_xmat"] = affine_followers_xmat;
    }
    if (skullstrip_opts !== null) {
        params["skullstrip_opts"] = skullstrip_opts;
    }
    if (at_opts !== null) {
        params["at_opts"] = at_opts;
    }
    return params;
}


function auto_warp_py_cargs(
    params: AutoWarpPyParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("auto_warp.py");
    cargs.push(
        "-base",
        execution.inputFile((params["base"] ?? null))
    );
    cargs.push(
        "-input",
        execution.inputFile((params["input"] ?? null))
    );
    if ((params["skull_strip_input"] ?? null)) {
        cargs.push("-skull_strip_input");
    }
    if ((params["qblur"] ?? null) !== null) {
        cargs.push(
            "-qblur",
            (params["qblur"] ?? null)
        );
    }
    if ((params["qworkhard"] ?? null) !== null) {
        cargs.push(
            "-qworkhard",
            (params["qworkhard"] ?? null)
        );
    }
    if ((params["qw_opts"] ?? null) !== null) {
        cargs.push(
            "-qw_opts",
            (params["qw_opts"] ?? null)
        );
    }
    if ((params["keep_rm_files"] ?? null)) {
        cargs.push("-keep_rm_files");
    }
    if ((params["prep_only"] ?? null)) {
        cargs.push("-prep_only");
    }
    if ((params["help"] ?? null)) {
        cargs.push("-help");
    }
    if ((params["hview"] ?? null)) {
        cargs.push("-hview");
    }
    if ((params["limited_help"] ?? null)) {
        cargs.push("-limited_help");
    }
    if ((params["option_help"] ?? null)) {
        cargs.push("-option_help");
    }
    if ((params["version"] ?? null)) {
        cargs.push("-version");
    }
    if ((params["ver"] ?? null)) {
        cargs.push("-ver");
    }
    if ((params["verb"] ?? null)) {
        cargs.push("-verb");
    }
    if ((params["save_script"] ?? null)) {
        cargs.push("-save_script");
    }
    if ((params["skip_affine"] ?? null)) {
        cargs.push("-skip_affine");
    }
    if ((params["skull_strip_base"] ?? null)) {
        cargs.push("-skull_strip_base");
    }
    if ((params["ex_mode"] ?? null) !== null) {
        cargs.push(
            "-ex_mode",
            (params["ex_mode"] ?? null)
        );
    }
    if ((params["overwrite"] ?? null)) {
        cargs.push("-overwrite");
    }
    if ((params["suffix"] ?? null) !== null) {
        cargs.push(
            "-suffix",
            (params["suffix"] ?? null)
        );
    }
    if ((params["child_anat"] ?? null) !== null) {
        cargs.push(
            "-child_anat",
            (params["child_anat"] ?? null)
        );
    }
    if ((params["warp_dxyz"] ?? null) !== null) {
        cargs.push(
            "-warp_dxyz",
            String((params["warp_dxyz"] ?? null))
        );
    }
    if ((params["affine_dxyz"] ?? null) !== null) {
        cargs.push(
            "-affine_dxyz",
            String((params["affine_dxyz"] ?? null))
        );
    }
    if ((params["affine_input_xmat"] ?? null) !== null) {
        cargs.push(
            "-affine_input_xmat",
            (params["affine_input_xmat"] ?? null)
        );
    }
    if ((params["smooth_anat"] ?? null)) {
        cargs.push("-smooth_anat");
    }
    if ((params["smooth_base"] ?? null)) {
        cargs.push("-smooth_base");
    }
    if ((params["unifize_input"] ?? null)) {
        cargs.push("-unifize_input");
    }
    if ((params["output_dir"] ?? null) !== null) {
        cargs.push(
            "-output_dir",
            (params["output_dir"] ?? null)
        );
    }
    if ((params["followers"] ?? null) !== null) {
        cargs.push(
            "-followers",
            (params["followers"] ?? null)
        );
    }
    if ((params["affine_followers_xmat"] ?? null) !== null) {
        cargs.push(
            "-affine_followers_xmat",
            (params["affine_followers_xmat"] ?? null)
        );
    }
    if ((params["skullstrip_opts"] ?? null) !== null) {
        cargs.push(
            "-skullstrip_opts",
            (params["skullstrip_opts"] ?? null)
        );
    }
    if ((params["at_opts"] ?? null) !== null) {
        cargs.push(
            "-at_opts",
            (params["at_opts"] ?? null)
        );
    }
    return cargs;
}


function auto_warp_py_outputs(
    params: AutoWarpPyParameters,
    execution: Execution,
): AutoWarpPyOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: AutoWarpPyOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function auto_warp_py_execute(
    params: AutoWarpPyParameters,
    execution: Execution,
): AutoWarpPyOutputs {
    /**
     * Nonlinear registration tool.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `AutoWarpPyOutputs`).
     */
    params = execution.params(params)
    const cargs = auto_warp_py_cargs(params, execution)
    const ret = auto_warp_py_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function auto_warp_py(
    base: InputPathType,
    input: InputPathType,
    skull_strip_input: boolean = false,
    qblur: string | null = null,
    qworkhard: string | null = null,
    qw_opts: string | null = null,
    keep_rm_files: boolean = false,
    prep_only: boolean = false,
    help: boolean = false,
    hview: boolean = false,
    limited_help: boolean = false,
    option_help: boolean = false,
    version: boolean = false,
    ver: boolean = false,
    verb: boolean = false,
    save_script: boolean = false,
    skip_affine: boolean = false,
    skull_strip_base: boolean = false,
    ex_mode: string | null = null,
    overwrite: boolean = false,
    suffix: string | null = null,
    child_anat: string | null = null,
    warp_dxyz: number | null = null,
    affine_dxyz: number | null = null,
    affine_input_xmat: string | null = null,
    smooth_anat: boolean = false,
    smooth_base: boolean = false,
    unifize_input: boolean = false,
    output_dir: string | null = null,
    followers: string | null = null,
    affine_followers_xmat: string | null = null,
    skullstrip_opts: string | null = null,
    at_opts: string | null = null,
    runner: Runner | null = null,
): AutoWarpPyOutputs {
    /**
     * Nonlinear registration tool.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param base Name of reference or template volume
     * @param input Name of dataset to be registered
     * @param skull_strip_input Do not skullstrip input dataset
     * @param qblur Specify 3dQwarp blurs for base and source volumes
     * @param qworkhard Set the two values for 3dQwarp's -workhard option
     * @param qw_opts Pass all of OPTS as extra options directly to 3dQwarp
     * @param keep_rm_files Don't delete any of the temporary files created
     * @param prep_only Do preprocessing steps only without alignment
     * @param help Display help message
     * @param hview Display help message in a text editor
     * @param limited_help Display limited help message
     * @param option_help Display help for all available options
     * @param version Show version number and exit
     * @param ver Show version number and exit
     * @param verb Be verbose in messages and options
     * @param save_script Save executed script in given file
     * @param skip_affine Skip the affine registration process
     * @param skull_strip_base Do not skullstrip base/template dataset
     * @param ex_mode Command execution mode: quiet, echo, dry_run, script
     * @param overwrite Overwrite existing files
     * @param suffix Suffix to add to output files
     * @param child_anat Names of child anatomical datasets
     * @param warp_dxyz Resolution used for computing warp (cubic only)
     * @param affine_dxyz Resolution used for computing initial transform (cubic only)
     * @param affine_input_xmat Affine transform to put input in standard space. Special values are: 'AUTO' to use @auto_tlrc, 'ID' to do nothing, 'FILE.1D' for a pre-computed matrix FILE.1D
     * @param smooth_anat Smooth anatomy before registration
     * @param smooth_base Smooth template before registration
     * @param unifize_input Unifize the input or not
     * @param output_dir Set directory for output datasets
     * @param followers Specify follower datasets
     * @param affine_followers_xmat Specify follower datasets' affine transforms
     * @param skullstrip_opts 3dSkullstrip miscellaneous options
     * @param at_opts @auto_tlrc miscellaneous options
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `AutoWarpPyOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(AUTO_WARP_PY_METADATA);
    const params = auto_warp_py_params(base, input, skull_strip_input, qblur, qworkhard, qw_opts, keep_rm_files, prep_only, help, hview, limited_help, option_help, version, ver, verb, save_script, skip_affine, skull_strip_base, ex_mode, overwrite, suffix, child_anat, warp_dxyz, affine_dxyz, affine_input_xmat, smooth_anat, smooth_base, unifize_input, output_dir, followers, affine_followers_xmat, skullstrip_opts, at_opts)
    return auto_warp_py_execute(params, execution);
}


export {
      AUTO_WARP_PY_METADATA,
      AutoWarpPyOutputs,
      AutoWarpPyParameters,
      auto_warp_py,
      auto_warp_py_params,
};
