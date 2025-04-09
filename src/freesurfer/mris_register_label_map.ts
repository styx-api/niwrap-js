// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const MRIS_REGISTER_LABEL_MAP_METADATA: Metadata = {
    id: "04dd3d65d5f6cbb9382a797a7359823cc9386d03.boutiques",
    name: "mris_register_label_map",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface MrisRegisterLabelMapParameters {
    "__STYXTYPE__": "mris_register_label_map";
    "subjects_list": string;
    "target_subject": string;
    "prior": string;
    "label": string;
    "template_volume": InputPathType;
    "debug": boolean;
    "check_opts": boolean;
    "help": boolean;
    "subjects_dir"?: string | null | undefined;
    "version": boolean;
    "vno"?: number | null | undefined;
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
        "mris_register_label_map": mris_register_label_map_cargs,
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
 * Output object returned when calling `mris_register_label_map(...)`.
 *
 * @interface
 */
interface MrisRegisterLabelMapOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function mris_register_label_map_params(
    subjects_list: string,
    target_subject: string,
    prior: string,
    label: string,
    template_volume: InputPathType,
    debug: boolean = false,
    check_opts: boolean = false,
    help: boolean = false,
    subjects_dir: string | null = null,
    version: boolean = false,
    vno: number | null = null,
): MrisRegisterLabelMapParameters {
    /**
     * Build parameters.
    
     * @param subjects_list List of training subjects
     * @param target_subject Name of target subject
     * @param prior Name of prior surface overlay
     * @param label Name of label for each subject
     * @param template_volume Template volume file
     * @param debug Turn on debugging
     * @param check_opts Don't run anything, just check options and exit
     * @param help Print out information on how to use this program
     * @param subjects_dir SUBJECTS_DIR
     * @param version Print out version and exit
     * @param vno Debug this vertex
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "mris_register_label_map" as const,
        "subjects_list": subjects_list,
        "target_subject": target_subject,
        "prior": prior,
        "label": label,
        "template_volume": template_volume,
        "debug": debug,
        "check_opts": check_opts,
        "help": help,
        "version": version,
    };
    if (subjects_dir !== null) {
        params["subjects_dir"] = subjects_dir;
    }
    if (vno !== null) {
        params["vno"] = vno;
    }
    return params;
}


function mris_register_label_map_cargs(
    params: MrisRegisterLabelMapParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("mris_register_label_map");
    cargs.push(
        "--subjects",
        (params["subjects_list"] ?? null)
    );
    cargs.push(
        "--trgsubject",
        (params["target_subject"] ?? null)
    );
    cargs.push(
        "--prior",
        (params["prior"] ?? null)
    );
    cargs.push(
        "--label",
        (params["label"] ?? null)
    );
    cargs.push(
        "--temp-vol",
        execution.inputFile((params["template_volume"] ?? null))
    );
    if ((params["debug"] ?? null)) {
        cargs.push("--debug");
    }
    if ((params["check_opts"] ?? null)) {
        cargs.push("--checkopts");
    }
    if ((params["help"] ?? null)) {
        cargs.push("--help");
    }
    if ((params["subjects_dir"] ?? null) !== null) {
        cargs.push(
            "--sdir",
            (params["subjects_dir"] ?? null)
        );
    }
    if ((params["version"] ?? null)) {
        cargs.push("--version");
    }
    if ((params["vno"] ?? null) !== null) {
        cargs.push(
            "--v",
            String((params["vno"] ?? null))
        );
    }
    return cargs;
}


function mris_register_label_map_outputs(
    params: MrisRegisterLabelMapParameters,
    execution: Execution,
): MrisRegisterLabelMapOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: MrisRegisterLabelMapOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function mris_register_label_map_execute(
    params: MrisRegisterLabelMapParameters,
    execution: Execution,
): MrisRegisterLabelMapOutputs {
    /**
     * Tool for registering label maps in Freesurfer.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `MrisRegisterLabelMapOutputs`).
     */
    params = execution.params(params)
    const cargs = mris_register_label_map_cargs(params, execution)
    const ret = mris_register_label_map_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function mris_register_label_map(
    subjects_list: string,
    target_subject: string,
    prior: string,
    label: string,
    template_volume: InputPathType,
    debug: boolean = false,
    check_opts: boolean = false,
    help: boolean = false,
    subjects_dir: string | null = null,
    version: boolean = false,
    vno: number | null = null,
    runner: Runner | null = null,
): MrisRegisterLabelMapOutputs {
    /**
     * Tool for registering label maps in Freesurfer.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param subjects_list List of training subjects
     * @param target_subject Name of target subject
     * @param prior Name of prior surface overlay
     * @param label Name of label for each subject
     * @param template_volume Template volume file
     * @param debug Turn on debugging
     * @param check_opts Don't run anything, just check options and exit
     * @param help Print out information on how to use this program
     * @param subjects_dir SUBJECTS_DIR
     * @param version Print out version and exit
     * @param vno Debug this vertex
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `MrisRegisterLabelMapOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(MRIS_REGISTER_LABEL_MAP_METADATA);
    const params = mris_register_label_map_params(subjects_list, target_subject, prior, label, template_volume, debug, check_opts, help, subjects_dir, version, vno)
    return mris_register_label_map_execute(params, execution);
}


export {
      MRIS_REGISTER_LABEL_MAP_METADATA,
      MrisRegisterLabelMapOutputs,
      MrisRegisterLabelMapParameters,
      mris_register_label_map,
      mris_register_label_map_params,
};
