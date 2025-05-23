// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const LABEL2MESH_METADATA: Metadata = {
    id: "cdcb0167501c7277846754252872bdd4aafe4ee0.boutiques",
    name: "label2mesh",
    package: "mrtrix",
    container_image_tag: "mrtrix3/mrtrix3:3.0.4",
};


interface Label2meshConfigParameters {
    "__STYXTYPE__": "config";
    "key": string;
    "value": string;
}


interface Label2meshParameters {
    "__STYXTYPE__": "label2mesh";
    "blocky": boolean;
    "info": boolean;
    "quiet": boolean;
    "debug": boolean;
    "force": boolean;
    "nthreads"?: number | null | undefined;
    "config"?: Array<Label2meshConfigParameters> | null | undefined;
    "help": boolean;
    "version": boolean;
    "nodes_in": InputPathType;
    "mesh_out": string;
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
        "label2mesh": label2mesh_cargs,
        "config": label2mesh_config_cargs,
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
        "label2mesh": label2mesh_outputs,
    };
    return outputsFuncs[t];
}


function label2mesh_config_params(
    key: string,
    value: string,
): Label2meshConfigParameters {
    /**
     * Build parameters.
    
     * @param key temporarily set the value of an MRtrix config file entry.
     * @param value temporarily set the value of an MRtrix config file entry.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "config" as const,
        "key": key,
        "value": value,
    };
    return params;
}


function label2mesh_config_cargs(
    params: Label2meshConfigParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("-config");
    cargs.push((params["key"] ?? null));
    cargs.push((params["value"] ?? null));
    return cargs;
}


/**
 * Output object returned when calling `label2mesh(...)`.
 *
 * @interface
 */
interface Label2meshOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * the output mesh file
     */
    mesh_out: OutputPathType;
}


function label2mesh_params(
    nodes_in: InputPathType,
    mesh_out: string,
    blocky: boolean = false,
    info: boolean = false,
    quiet: boolean = false,
    debug: boolean = false,
    force: boolean = false,
    nthreads: number | null = null,
    config: Array<Label2meshConfigParameters> | null = null,
    help: boolean = false,
    version: boolean = false,
): Label2meshParameters {
    /**
     * Build parameters.
    
     * @param nodes_in the input node parcellation image
     * @param mesh_out the output mesh file
     * @param blocky generate 'blocky' meshes with precise delineation of voxel edges, rather than the default Marching Cubes approach
     * @param info display information messages.
     * @param quiet do not display information messages or progress status; alternatively, this can be achieved by setting the MRTRIX_QUIET environment variable to a non-empty string.
     * @param debug display debugging messages.
     * @param force force overwrite of output files (caution: using the same file as input and output might cause unexpected behaviour).
     * @param nthreads use this number of threads in multi-threaded applications (set to 0 to disable multi-threading).
     * @param config temporarily set the value of an MRtrix config file entry.
     * @param help display this information page and exit.
     * @param version display version information and exit.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "label2mesh" as const,
        "blocky": blocky,
        "info": info,
        "quiet": quiet,
        "debug": debug,
        "force": force,
        "help": help,
        "version": version,
        "nodes_in": nodes_in,
        "mesh_out": mesh_out,
    };
    if (nthreads !== null) {
        params["nthreads"] = nthreads;
    }
    if (config !== null) {
        params["config"] = config;
    }
    return params;
}


function label2mesh_cargs(
    params: Label2meshParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("label2mesh");
    if ((params["blocky"] ?? null)) {
        cargs.push("-blocky");
    }
    if ((params["info"] ?? null)) {
        cargs.push("-info");
    }
    if ((params["quiet"] ?? null)) {
        cargs.push("-quiet");
    }
    if ((params["debug"] ?? null)) {
        cargs.push("-debug");
    }
    if ((params["force"] ?? null)) {
        cargs.push("-force");
    }
    if ((params["nthreads"] ?? null) !== null) {
        cargs.push(
            "-nthreads",
            String((params["nthreads"] ?? null))
        );
    }
    if ((params["config"] ?? null) !== null) {
        cargs.push(...(params["config"] ?? null).map(s => dynCargs(s.__STYXTYPE__)(s, execution)).flat());
    }
    if ((params["help"] ?? null)) {
        cargs.push("-help");
    }
    if ((params["version"] ?? null)) {
        cargs.push("-version");
    }
    cargs.push(execution.inputFile((params["nodes_in"] ?? null)));
    cargs.push((params["mesh_out"] ?? null));
    return cargs;
}


function label2mesh_outputs(
    params: Label2meshParameters,
    execution: Execution,
): Label2meshOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: Label2meshOutputs = {
        root: execution.outputFile("."),
        mesh_out: execution.outputFile([(params["mesh_out"] ?? null)].join('')),
    };
    return ret;
}


function label2mesh_execute(
    params: Label2meshParameters,
    execution: Execution,
): Label2meshOutputs {
    /**
     * Generate meshes from a label image.
     * 
     * 
     * 
     * References:
     * 
     * .
     * 
     * Author: MRTrix3 Developers
     * 
     * URL: https://www.mrtrix.org/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `Label2meshOutputs`).
     */
    params = execution.params(params)
    const cargs = label2mesh_cargs(params, execution)
    const ret = label2mesh_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function label2mesh(
    nodes_in: InputPathType,
    mesh_out: string,
    blocky: boolean = false,
    info: boolean = false,
    quiet: boolean = false,
    debug: boolean = false,
    force: boolean = false,
    nthreads: number | null = null,
    config: Array<Label2meshConfigParameters> | null = null,
    help: boolean = false,
    version: boolean = false,
    runner: Runner | null = null,
): Label2meshOutputs {
    /**
     * Generate meshes from a label image.
     * 
     * 
     * 
     * References:
     * 
     * .
     * 
     * Author: MRTrix3 Developers
     * 
     * URL: https://www.mrtrix.org/
    
     * @param nodes_in the input node parcellation image
     * @param mesh_out the output mesh file
     * @param blocky generate 'blocky' meshes with precise delineation of voxel edges, rather than the default Marching Cubes approach
     * @param info display information messages.
     * @param quiet do not display information messages or progress status; alternatively, this can be achieved by setting the MRTRIX_QUIET environment variable to a non-empty string.
     * @param debug display debugging messages.
     * @param force force overwrite of output files (caution: using the same file as input and output might cause unexpected behaviour).
     * @param nthreads use this number of threads in multi-threaded applications (set to 0 to disable multi-threading).
     * @param config temporarily set the value of an MRtrix config file entry.
     * @param help display this information page and exit.
     * @param version display version information and exit.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `Label2meshOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(LABEL2MESH_METADATA);
    const params = label2mesh_params(nodes_in, mesh_out, blocky, info, quiet, debug, force, nthreads, config, help, version)
    return label2mesh_execute(params, execution);
}


export {
      LABEL2MESH_METADATA,
      Label2meshConfigParameters,
      Label2meshOutputs,
      Label2meshParameters,
      label2mesh,
      label2mesh_config_params,
      label2mesh_params,
};
