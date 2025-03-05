// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const ISOLATE_LABELS_CSH_METADATA: Metadata = {
    id: "38dc57e5ac2ab0f7a3569ce5a6d3b6708f167dad.boutiques",
    name: "isolate_labels.csh",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface IsolateLabelsCshParameters {
    "__STYXTYPE__": "isolate_labels.csh";
    "label_volume": InputPathType;
    "output_prefix": string;
    "lowercase_label_option"?: string | null | undefined;
    "version": boolean;
    "keepval": boolean;
    "help": boolean;
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
        "isolate_labels.csh": isolate_labels_csh_cargs,
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
 * Output object returned when calling `isolate_labels_csh(...)`.
 *
 * @interface
 */
interface IsolateLabelsCshOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function isolate_labels_csh_params(
    label_volume: InputPathType,
    output_prefix: string,
    lowercase_label_option: string | null = null,
    version: boolean = false,
    keepval: boolean = false,
    help: boolean = false,
): IsolateLabelsCshParameters {
    /**
     * Build parameters.
    
     * @param label_volume Label volume to be analyzed
     * @param output_prefix Prefix of binary label file(s)
     * @param lowercase_label_option The particular label to be analyzed; default is all labels.
     * @param version Print version and exit
     * @param keepval Keeps original label values
     * @param help Print help and exit
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "isolate_labels.csh" as const,
        "label_volume": label_volume,
        "output_prefix": output_prefix,
        "version": version,
        "keepval": keepval,
        "help": help,
    };
    if (lowercase_label_option !== null) {
        params["lowercase_label_option"] = lowercase_label_option;
    }
    return params;
}


function isolate_labels_csh_cargs(
    params: IsolateLabelsCshParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("isolate_labels");
    cargs.push(
        "--vol",
        execution.inputFile((params["label_volume"] ?? null))
    );
    cargs.push(
        "--outprefix",
        (params["output_prefix"] ?? null)
    );
    if ((params["lowercase_label_option"] ?? null) !== null) {
        cargs.push(
            "--l",
            (params["lowercase_label_option"] ?? null)
        );
    }
    if ((params["version"] ?? null)) {
        cargs.push("--version");
    }
    if ((params["keepval"] ?? null)) {
        cargs.push("--keepval");
    }
    if ((params["help"] ?? null)) {
        cargs.push("--help");
    }
    return cargs;
}


function isolate_labels_csh_outputs(
    params: IsolateLabelsCshParameters,
    execution: Execution,
): IsolateLabelsCshOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: IsolateLabelsCshOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function isolate_labels_csh_execute(
    params: IsolateLabelsCshParameters,
    execution: Execution,
): IsolateLabelsCshOutputs {
    /**
     * Tool to separate out a particular or all labels into individual binary files for subsequent shape analysis.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `IsolateLabelsCshOutputs`).
     */
    params = execution.params(params)
    const cargs = isolate_labels_csh_cargs(params, execution)
    const ret = isolate_labels_csh_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function isolate_labels_csh(
    label_volume: InputPathType,
    output_prefix: string,
    lowercase_label_option: string | null = null,
    version: boolean = false,
    keepval: boolean = false,
    help: boolean = false,
    runner: Runner | null = null,
): IsolateLabelsCshOutputs {
    /**
     * Tool to separate out a particular or all labels into individual binary files for subsequent shape analysis.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param label_volume Label volume to be analyzed
     * @param output_prefix Prefix of binary label file(s)
     * @param lowercase_label_option The particular label to be analyzed; default is all labels.
     * @param version Print version and exit
     * @param keepval Keeps original label values
     * @param help Print help and exit
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `IsolateLabelsCshOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(ISOLATE_LABELS_CSH_METADATA);
    const params = isolate_labels_csh_params(label_volume, output_prefix, lowercase_label_option, version, keepval, help)
    return isolate_labels_csh_execute(params, execution);
}


export {
      ISOLATE_LABELS_CSH_METADATA,
      IsolateLabelsCshOutputs,
      IsolateLabelsCshParameters,
      isolate_labels_csh,
      isolate_labels_csh_params,
};
